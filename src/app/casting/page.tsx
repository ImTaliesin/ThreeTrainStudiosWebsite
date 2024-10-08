import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';

export default function Casting() {
	return (
		<div
			className={cn(
				'flex items-center justify-center relative overflow-hidden pt-10'
			)}>
			<div className='container mx-auto px-4'>
				<div className='max-w-3xl mx-auto bg-stone-950/80 rounded-lg shadow-lg mb-6 text-stone-50'>
					<h1 className='text-4xl font-bold p-4 text-center'>
						Casting Opportunities
					</h1>
					<div className='space-y-4 mx-6'>
						<p className='text-lg leading-relaxed'>
							We are excited to announce that we are currently casting voice
							actors for our upcoming animation series, Kingdom of
							Light!
						</p>
						<p className='text-lg leading-relaxed'>
							Kingdom of Light is an inspiring tale set in a world
							where darkness has taken over, and a group of brave heroes must
							embark on a journey to restore the light. The series explores
							themes of hope, courage, and the power of unity in the face of
							adversity.
						</p>
						<p className='text-lg leading-relaxed'>
							We are seeking talented voice actors to bring our characters to
							life. The available roles include:
						</p>
						<ul className='list-disc pl-6'>
							<li>
								Name (lead): Interesting description. What their voice sounds
								like.
							</li>
							<li>
								Name (lead): Interesting description. What their voice sounds
								like.
							</li>
							<li>
								Name (antagonist): Interesting description. What their voice
								sounds like.
							</li>
						</ul>
						<p className='text-lg leading-relaxed'>
							If you are interested in auditioning for any of these roles,
							please fill out our casting form below:
						</p>
						<form className='h1:text-stone-50 text-black space-y-4'>
							<div>
								<Label htmlFor='name' className='text-stone-50'>Name:</Label>
								<Input
									type='text'
									id='name'
									name='name'
									required
								/>
							</div>
							<div>
								<Label htmlFor='email' className='text-stone-50'>Email:</Label>
								<Input
									type='email'
									id='email'
									name='email'
									required
								/>
							</div>
							<div>
								<Label htmlFor='phone' className='text-stone-50'>Phone:</Label>
								<Input
									type='tel'
									id='phone'
									name='phone'
									required
								/>
							</div>
							<div>
								<Label htmlFor='demo' className='text-stone-50'>Voice Demo Reel:</Label>
								<Input
									type='file'
									id='demo'
									name='demo'
									accept='audio/*'
									required
									className='md:w-1/3 w-[80%] flex-grow'
								/>
							</div>
							<div className='text-stone-50 text-sm'>
								<Label htmlFor='character' className='text-md'>Preferred Character(s):</Label>
								<Select
									name='character'
									required
									>
									
									<option value='name1'>Name</option>
									<option value='name2'>Name</option>
									<option value='name3'>Name</option>
								</Select>
							</div>
							<Button
								type='submit'
								className='bg-red-950/80 hover:bg-red-800/80 rounded-xl'>
								Submit
							</Button>
						</form>
						<p className='text-lg leading-relaxed pb-6'>
							We will review all submissions and contact selected applicants to
							discuss the next steps in the casting process. Thank you for your
							interest in being a part of Kingdom of Light!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
