'use client';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import ThemedChart from './themed.chart';

export default function Page() {
  return (
    <div className="p-2">
      <Button
        className="bg-primary text-white rounded-lg px-4 py-2 
             hover:bg-primary-light focus:ring-2 focus:ring-primary-dark 
             shadow-custom transition"
        label="Hello"
      />

      <InputText
        className="w-full px-4 py-2 border border-border-light 
             rounded-md focus:ring-primary-light 
             dark:border-border-dark bg-surface-light dark:bg-surface-dark 
             text-text-light dark:text-text-dark"
      />
      <div className="w-50 h-20">
        <ThemedChart />
      </div>
    </div>
  );
}
