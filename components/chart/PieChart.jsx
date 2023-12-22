"use client"

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });



const PieChart = ({ title, value, series, colors }) => {
    return (
        <Box
            id="chart"
            flex={1}
            display="flex"
            bgcolor="#fcfcfc"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            pl={3.5}
            py={2}
            mx={3}
            my={3}
            gap={2}
            borderRadius="15px"
            height="300px"
            width="300px"
        >
            <Stack direction="column">
            <Typography
                    fontSize={24}
                    color="#11142d"
                    fontWeight={700}
                    mt={1}
                >
                    {value}
                </Typography>
                <Typography fontSize={14} color="#808191">
                    {title}
                </Typography>
              
            </Stack>

            {(typeof window !== "undefined") && (
                <Chart
                    options={{
                        chart: { type: "donut" },
                        colors,
                        legend: { show: false },
                        dataLabels: { enabled: false },
                    }}
                    series={series}
                    type="donut"
                    width="220px"
                />
            )}
        </Box>
    );
};

export default PieChart;
