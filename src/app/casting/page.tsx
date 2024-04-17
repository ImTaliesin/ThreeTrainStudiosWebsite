import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';

export default function Casting() {
  return (
    <div
      className={cn(
        'bg-gradient-to-b from-emerald-400 to-emerald-200 min-h-dvh flex items-center justify-center relative overflow-hidden'
      )}
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mx-auto bg-neutral-950/80 rounded-lg shadow-lg mt-32 mb-6 text-white'>
          <h1 className='text-4xl font-bold p-4 text-center'>Casting Opportunities</h1>
          <div className='space-y-4 mx-6'>
            <p className='text-lg leading-relaxed'>
              We are excited to announce that we are currently casting voice actors for our upcoming animation series, "Kingdom of Light"!
            </p>
            <p className='text-lg leading-relaxed'>
              "Kingdom of Light" is an inspiring tale set in a world where .... in the face of adversity.
            </p>
            <p className='text-lg leading-relaxed'>
              We are seeking talented voice actors to bring our characters to life. The available roles include:
            </p>
            <ul className='list-disc pl-6'>
              <li>Name (lead): Interesting description. What their voice sounds like.</li>
              <li>Name (lead): Interesting description. What their voice sounds like.</li>
              <li>Name (antagonist): Interesting description. What their voice sounds like.</li>
            </ul>
            <p className='text-lg leading-relaxed'>
              If you are interested in auditioning for any of these roles, please fill out our casting form below:
            </p>
            <form className='space-y-4'>
              <div>
                <Label htmlFor='name'>Name</Label>
                <Input type='text' id='name' name='name' required />
              </div>
              <div>
                <Label htmlFor='email'>Email</Label>
                <Input type='email' id='email' name='email' required />
              </div>
              <div>
                <Label htmlFor='phone'>Phone</Label>
                <Input type='tel' id='phone' name='phone' required />
              </div>
              <div>
                <Label htmlFor='demo'>Voice Demo Reel</Label>
                <Input type='file' id='demo' name='demo' accept='audio/*' required />
              </div>
              <div>
                <Label htmlFor='character'>Preferred Character(s)</Label>
                <Select id='character' name='character' multiple required>
                  <option value='name1'>Name</option>
                  <option value='name2'>Name</option>
                  <option value='name3'>Name</option>
                </Select>
              </div>
              <Button type='submit' className='bg-emerald-500 hover:bg-emerald-600 rounded-xl'>Submit</Button>
            </form>
            <p className='text-lg leading-relaxed pb-6'>
              We will review all submissions and contact selected applicants to discuss the next steps in the casting process. Thank you for your interest in being a part of Kingdom of Light!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}