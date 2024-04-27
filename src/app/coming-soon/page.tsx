'use client'
import React, { useState, FormEvent, ChangeEvent } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function About() {
  const [email, setEmail] = useState('')

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Perform form submission logic, e.g., send email to server
    console.log('Submitting email:', email)
    // Reset the form
    setEmail('')
  }

  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden',
      )}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-lg bg-stone-950/70 p-6 text-stone-50 shadow-lg sm:p-8">
          <div className="flex flex-col md:flex-row">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="h-60 w-full overflow-hidden bg-red-800 text-center md:h-80 md:w-80">
                Photo
              </div>
            </div>
            <div className="flex-grow">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed md:text-xl">
                  Three Trains wants to provide free content for everyone to
                  enjoy.
                </p>
                <p className="text-lg leading-relaxed md:text-xl">
                  We are currently working on a new project that will be
                  released soon. Stay tuned for more information.
                </p>
                <p className="text-lg leading-relaxed md:text-xl">
                  If you would like to be notified when the project is released,
                  please sign up for our newsletter.
                </p>

                <div className="flex flex-col items-center sm:flex-row">
                  <form onSubmit={handleSubmit} className="w-full sm:w-auto">
                    <div className="flex flex-col items-center sm:flex-row">
                      <Input
                        type="email"
                        placeholder="Email Address"
                        className="mb-2 flex-grow sm:mb-0 sm:mr-4"
                        value={email}
                        onChange={handleEmailChange}
                        required
                      />
                      <Button
                        type="submit"
                        className="w-full border sm:w-auto bg-red-950/80"
                      >
                        Sign Up
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
