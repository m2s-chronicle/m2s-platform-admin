import dynamic from 'next/dynamic';

//! SSR avoid
const ReactApexcharts = dynamic(() => import('react-apexcharts'), { ssr: false });

export default ReactApexcharts;
