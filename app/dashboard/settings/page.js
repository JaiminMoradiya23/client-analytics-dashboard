'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useTheme } from '@/context/ThemeContext';
import Card from '@/components/ui/Card';
import { User, Bell, Shield, Palette } from 'lucide-react';

function Toggle({ enabled, onChange }) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors ${
        enabled ? 'bg-indigo-600' : 'bg-slate-200 dark:bg-slate-700'
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${
          enabled ? 'translate-x-5.5' : 'translate-x-0.5'
        } mt-0.5`}
      />
    </button>
  );
}

export default function SettingsPage() {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Settings
        </h1>
        <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
          Manage your account preferences
        </p>
      </div>

      <Card>
        <div className="flex items-center gap-3 border-b border-slate-200/80 pb-4 dark:border-slate-700/50">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
            <User className="h-[18px] w-[18px]" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Profile</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Your personal information</p>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Full Name
            </label>
            <input
              type="text"
              defaultValue={user?.name || ''}
              className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-600 dark:bg-slate-800/50 dark:text-white dark:focus:border-indigo-400"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Email
            </label>
            <input
              type="email"
              defaultValue={user?.email || ''}
              className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-600 dark:bg-slate-800/50 dark:text-white dark:focus:border-indigo-400"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Role
            </label>
            <input
              type="text"
              defaultValue={user?.role || 'Admin'}
              readOnly
              className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Timezone
            </label>
            <select className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-600 dark:bg-slate-800/50 dark:text-white dark:focus:border-indigo-400">
              <option>UTC (GMT+0:00)</option>
              <option>EST (GMT-5:00)</option>
              <option>PST (GMT-8:00)</option>
              <option>IST (GMT+5:30)</option>
            </select>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-center gap-3 border-b border-slate-200/80 pb-4 dark:border-slate-700/50">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
            <Palette className="h-[18px] w-[18px]" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Appearance</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Customize visual preferences</p>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-900 dark:text-white">Dark Mode</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Use dark theme across the dashboard
            </p>
          </div>
          <Toggle enabled={theme === 'dark'} onChange={toggleTheme} />
        </div>
      </Card>

      <Card>
        <div className="flex items-center gap-3 border-b border-slate-200/80 pb-4 dark:border-slate-700/50">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
            <Bell className="h-[18px] w-[18px]" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">Notifications</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">How you receive updates</p>
          </div>
        </div>
        <div className="mt-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">Email Notifications</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Receive reports and alerts via email</p>
            </div>
            <Toggle enabled={emailNotif} onChange={setEmailNotif} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">Push Notifications</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Browser push notifications for real-time alerts</p>
            </div>
            <Toggle enabled={pushNotif} onChange={setPushNotif} />
          </div>
        </div>
      </Card>

      <div className="flex items-center justify-end gap-3">
        <button className="h-10 rounded-lg border border-slate-300 px-4 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800">
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="h-10 rounded-lg bg-indigo-600 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
        >
          {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>
    </div>
  );
}
