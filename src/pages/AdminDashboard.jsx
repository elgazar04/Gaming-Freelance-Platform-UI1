import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaUsers, FaBriefcase, FaDollarSign, FaChartLine, FaCog } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import Card from '../components/Card';
import './styles/AdminDashboard.css';

const AdminDashboard = () => {
  const sidebarItems = [
    { path: '/admin/dashboard', label: 'Overview', icon: <FaChartLine /> },
    { path: '/admin/users', label: 'Users Management', icon: <FaUsers /> },
    { path: '/admin/jobs', label: 'Pending Jobs', icon: <FaBriefcase /> },
    { path: '/admin/analytics', label: 'Analytics', icon: <FaChartLine /> },
    { path: '/admin/settings', label: 'Settings', icon: <FaCog /> },
  ];

  const jobsData = [
    { name: 'Jan', jobs: 65 },
    { name: 'Feb', jobs: 89 },
    { name: 'Mar', jobs: 103 },
    { name: 'Apr', jobs: 142 },
    { name: 'May', jobs: 178 },
    { name: 'Jun', jobs: 195 },
  ];

  const revenueData = [
    { name: 'Jan', revenue: 4200 },
    { name: 'Feb', revenue: 5800 },
    { name: 'Mar', revenue: 7200 },
    { name: 'Apr', revenue: 9500 },
    { name: 'May', revenue: 11800 },
    { name: 'Jun', revenue: 13200 },
  ];

  const userRolesData = [
    { name: 'Gamers', value: 6542, color: '#00FF9D' },
    { name: 'Clients', value: 3458, color: '#7B61FF' },
  ];

  const categoryData = [
    { category: 'Boosting', count: 450 },
    { category: 'Coaching', count: 380 },
    { category: 'Training', count: 290 },
    { category: 'Leveling', count: 210 },
    { category: 'Quests', count: 170 },
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar items={sidebarItems} />
      
      <div className="dashboard-content">
        <div className="dashboard-header">
          <div>
            <h1 className="dashboard-title">Admin Dashboard</h1>
            <p className="dashboard-subtitle">Platform analytics and management</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <StatCard
            icon={<FaUsers />}
            label="Total Users"
            value="10,000"
            change="+12% this month"
            color="green"
          />
          <StatCard
            icon={<FaBriefcase />}
            label="Active Jobs"
            value="1,234"
            change="+8% this week"
            color="blue"
          />
          <StatCard
            icon={<FaDollarSign />}
            label="Total Revenue"
            value="$2.1M"
            change="+23% this month"
            color="purple"
          />
          <StatCard
            icon={<FaChartLine />}
            label="Growth Rate"
            value="18%"
            change="Excellent"
            color="pink"
          />
        </div>

        {/* Charts Grid */}
        <div className="charts-grid">
          <Card variant="glass" className="chart-card">
            <h3 className="chart-title">Job Postings Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={jobsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="#6B6B6B" />
                <YAxis stroke="#6B6B6B" />
                <Tooltip 
                  contentStyle={{
                    background: 'rgba(26, 26, 26, 0.95)',
                    border: '1px solid #00FF9D',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="jobs" stroke="#00FF9D" strokeWidth={3} dot={{ fill: '#00FF9D', r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card variant="glass" className="chart-card">
            <h3 className="chart-title">Revenue Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="#6B6B6B" />
                <YAxis stroke="#6B6B6B" />
                <Tooltip 
                  contentStyle={{
                    background: 'rgba(26, 26, 26, 0.95)',
                    border: '1px solid #7B61FF',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#7B61FF" strokeWidth={3} dot={{ fill: '#7B61FF', r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card variant="glass" className="chart-card">
            <h3 className="chart-title">User Roles Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={userRolesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {userRolesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          <Card variant="glass" className="chart-card">
            <h3 className="chart-title">Gigs by Category</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="category" stroke="#6B6B6B" />
                <YAxis stroke="#6B6B6B" />
                <Tooltip 
                  contentStyle={{
                    background: 'rgba(26, 26, 26, 0.95)',
                    border: '1px solid #3B82F6',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="count" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card variant="glass" className="activity-table-card">
          <h3 className="card-title">Recent Platform Activity</h3>
          <div className="admin-table">
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Action</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ProGamer_99</td>
                  <td>Completed job</td>
                  <td><span className="type-badge gamer">Gamer</span></td>
                  <td className="amount">$120</td>
                  <td>5 min ago</td>
                </tr>
                <tr>
                  <td>GameFan_2024</td>
                  <td>Posted new job</td>
                  <td><span className="type-badge client">Client</span></td>
                  <td className="amount">$80</td>
                  <td>12 min ago</td>
                </tr>
                <tr>
                  <td>LeagueMaster</td>
                  <td>Received payment</td>
                  <td><span className="type-badge gamer">Gamer</span></td>
                  <td className="amount">$150</td>
                  <td>1 hour ago</td>
                </tr>
                <tr>
                  <td>Client_123</td>
                  <td>Left review</td>
                  <td><span className="type-badge client">Client</span></td>
                  <td>-</td>
                  <td>2 hours ago</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;

