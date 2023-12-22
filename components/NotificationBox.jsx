import { useState, useEffect } from "react";
import axios from "axios";
import { ImCross } from "react-icons/im";

const NotificationBox = () => {
  const [notifications, setNotifications] = useState([]);

  async function getNotifications() {
    try {
      const response = await axios.get('/api/notification');
      setNotifications(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteNotification(notification) {
    const _id = notification._id;
    await axios.delete('/api/notification?_id=' + _id);
    getNotifications();
  }

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <div className="flex justify-center mt-1">
      <div className="absolute md:right-3 w-64 md:w-96 py-2 px-4 mt-2 mr-1 origin-top-right bg-gray-100 hover:text-black rounded-md shadow-xl">
        <div className="py-2">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div key={notification._id} className="flex justify-between items-center border-b-2 border-gray-400 p-1">
                <div>
                  <p className="text-sm text-gray-900">{notification.info}</p>
                  <p className="text-xs text-gray-500">{new Date(notification.createdAt).toLocaleString()}</p>
                </div>
                <div>
                  <button
                    className="text-gray-500 hover:text-red-500 transition-all"
                    onClick={() => deleteNotification(notification)}
                  >
                    <ImCross />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-900">No new notifications</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationBox;