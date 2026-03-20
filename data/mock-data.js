export const statsData = {
  '7d': [
    { title: 'Total Sales', value: '$12,426', change: 8.2, trend: 'up', icon: 'DollarSign' },
    { title: 'Total Users', value: '1,243', change: 12.1, trend: 'up', icon: 'Users' },
    { title: 'Revenue Growth', value: '+12.5%', change: 3.2, trend: 'up', icon: 'TrendingUp' },
    { title: 'Conversion Rate', value: '3.2%', change: -0.4, trend: 'down', icon: 'Percent' },
  ],
  '30d': [
    { title: 'Total Sales', value: '$48,352', change: 14.6, trend: 'up', icon: 'DollarSign' },
    { title: 'Total Users', value: '5,832', change: 8.3, trend: 'up', icon: 'Users' },
    { title: 'Revenue Growth', value: '+18.2%', change: 5.7, trend: 'up', icon: 'TrendingUp' },
    { title: 'Conversion Rate', value: '3.8%', change: 1.2, trend: 'up', icon: 'Percent' },
  ],
  '12m': [
    { title: 'Total Sales', value: '$584,293', change: 22.4, trend: 'up', icon: 'DollarSign' },
    { title: 'Total Users', value: '48,583', change: 32.1, trend: 'up', icon: 'Users' },
    { title: 'Revenue Growth', value: '+24.8%', change: 8.3, trend: 'up', icon: 'TrendingUp' },
    { title: 'Conversion Rate', value: '4.1%', change: 2.4, trend: 'up', icon: 'Percent' },
  ],
};

export const salesChartData = {
  '7d': [
    { name: 'Mon', sales: 4200 },
    { name: 'Tue', sales: 3800 },
    { name: 'Wed', sales: 5100 },
    { name: 'Thu', sales: 4600 },
    { name: 'Fri', sales: 5400 },
    { name: 'Sat', sales: 3200 },
    { name: 'Sun', sales: 4800 },
  ],
  '30d': [
    { name: 'Mar 1', sales: 3200 },
    { name: 'Mar 4', sales: 4100 },
    { name: 'Mar 7', sales: 3800 },
    { name: 'Mar 10', sales: 5200 },
    { name: 'Mar 13', sales: 4600 },
    { name: 'Mar 16', sales: 5800 },
    { name: 'Mar 19', sales: 4900 },
    { name: 'Mar 22', sales: 6200 },
    { name: 'Mar 25', sales: 5400 },
    { name: 'Mar 28', sales: 7100 },
  ],
  '12m': [
    { name: 'Apr', sales: 42000 },
    { name: 'May', sales: 45200 },
    { name: 'Jun', sales: 48100 },
    { name: 'Jul', sales: 51300 },
    { name: 'Aug', sales: 49800 },
    { name: 'Sep', sales: 53200 },
    { name: 'Oct', sales: 56100 },
    { name: 'Nov', sales: 52800 },
    { name: 'Dec', sales: 61200 },
    { name: 'Jan', sales: 58400 },
    { name: 'Feb', sales: 63100 },
    { name: 'Mar', sales: 67200 },
  ],
};

export const usersChartData = {
  '7d': [
    { name: 'Mon', users: 180 },
    { name: 'Tue', users: 165 },
    { name: 'Wed', users: 210 },
    { name: 'Thu', users: 195 },
    { name: 'Fri', users: 230 },
    { name: 'Sat', users: 120 },
    { name: 'Sun', users: 145 },
  ],
  '30d': [
    { name: 'Mar 1', users: 420 },
    { name: 'Mar 4', users: 380 },
    { name: 'Mar 7', users: 510 },
    { name: 'Mar 10', users: 460 },
    { name: 'Mar 13', users: 540 },
    { name: 'Mar 16', users: 490 },
    { name: 'Mar 19', users: 620 },
    { name: 'Mar 22', users: 580 },
    { name: 'Mar 25', users: 640 },
    { name: 'Mar 28', users: 710 },
  ],
  '12m': [
    { name: 'Apr', users: 3200 },
    { name: 'May', users: 3500 },
    { name: 'Jun', users: 3800 },
    { name: 'Jul', users: 4100 },
    { name: 'Aug', users: 3900 },
    { name: 'Sep', users: 4300 },
    { name: 'Oct', users: 4600 },
    { name: 'Nov', users: 4200 },
    { name: 'Dec', users: 5100 },
    { name: 'Jan', users: 4800 },
    { name: 'Feb', users: 5400 },
    { name: 'Mar', users: 5800 },
  ],
};

export const trafficData = {
  '7d': [
    { name: 'Direct', value: 35 },
    { name: 'Organic', value: 28 },
    { name: 'Referral', value: 18 },
    { name: 'Social', value: 12 },
    { name: 'Email', value: 7 },
  ],
  '30d': [
    { name: 'Direct', value: 32 },
    { name: 'Organic', value: 30 },
    { name: 'Referral', value: 20 },
    { name: 'Social', value: 11 },
    { name: 'Email', value: 7 },
  ],
  '12m': [
    { name: 'Direct', value: 30 },
    { name: 'Organic', value: 32 },
    { name: 'Referral', value: 18 },
    { name: 'Social', value: 13 },
    { name: 'Email', value: 7 },
  ],
};

export const TRAFFIC_COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
export const DEVICE_COLORS = ['#6366f1', '#10b981', '#f59e0b'];

export const recentTransactions = [
  { id: 1, customer: 'Sarah Johnson', email: 'sarah@example.com', amount: '$1,250.00', status: 'completed', date: 'Mar 19, 2026' },
  { id: 2, customer: 'Michael Chen', email: 'michael@example.com', amount: '$890.00', status: 'pending', date: 'Mar 18, 2026' },
  { id: 3, customer: 'Emily Davis', email: 'emily@example.com', amount: '$2,100.00', status: 'completed', date: 'Mar 18, 2026' },
  { id: 4, customer: 'James Wilson', email: 'james@example.com', amount: '$450.00', status: 'failed', date: 'Mar 17, 2026' },
  { id: 5, customer: 'Lisa Anderson', email: 'lisa@example.com', amount: '$1,680.00', status: 'completed', date: 'Mar 17, 2026' },
  { id: 6, customer: 'David Martinez', email: 'david@example.com', amount: '$3,240.00', status: 'completed', date: 'Mar 16, 2026' },
];

export const analyticsData = {
  revenueComparison: [
    { name: 'Week 1', current: 12400, previous: 10200 },
    { name: 'Week 2', current: 15600, previous: 12800 },
    { name: 'Week 3', current: 14200, previous: 13400 },
    { name: 'Week 4', current: 18800, previous: 14600 },
  ],
  topPages: [
    { page: '/home', views: 12453, unique: 8234, bounceRate: '32%' },
    { page: '/products', views: 8932, unique: 6123, bounceRate: '45%' },
    { page: '/pricing', views: 6721, unique: 4532, bounceRate: '28%' },
    { page: '/blog', views: 5432, unique: 3876, bounceRate: '52%' },
    { page: '/contact', views: 3210, unique: 2456, bounceRate: '38%' },
  ],
  deviceBreakdown: [
    { name: 'Desktop', value: 52 },
    { name: 'Mobile', value: 36 },
    { name: 'Tablet', value: 12 },
  ],
  sessionsByCountry: [
    { country: 'United States', sessions: 24530, percentage: 38 },
    { country: 'United Kingdom', sessions: 12840, percentage: 20 },
    { country: 'Germany', sessions: 8420, percentage: 13 },
    { country: 'Canada', sessions: 6230, percentage: 10 },
    { country: 'Australia', sessions: 4810, percentage: 7 },
  ],
};

export async function fetchDashboardData(range) {
  await new Promise(resolve => setTimeout(resolve, 600));
  return {
    stats: statsData[range],
    sales: salesChartData[range],
    users: usersChartData[range],
    traffic: trafficData[range],
  };
}
