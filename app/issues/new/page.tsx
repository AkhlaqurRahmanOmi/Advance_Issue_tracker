'use client'
import { Button, Callout, TextArea, TextField } from '@radix-ui/themes'
import { useForm, Controller } from 'react-hook-form'
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
// import SimpleMDE from "react-simplemde-editor";
// import "easymde/dist/easymde.min.css";


interface IssueForm {
    title: string,
    description: string
}

const NewIssuePage = () => {
    const router = useRouter()
    const { register, control, handleSubmit } = useForm<IssueForm>();
    const [error, setError] = useState('');
    return (
        <div className='max-w-xl'>
            {error && <Callout.Root color='red' className='mb-6'>
                <Callout.Text>{error}</Callout.Text>
            </Callout.Root>}
            <form className=' space-y-5' onSubmit={handleSubmit(async (data) => {
                try {
                    await axios.post('/api/issues', data)
                    router.push('/issues')
                } catch (err) {
                    setError('An unexpected error occurred')
                }
            })}>
                <TextField.Root placeholder='title' {...register('title')} />
                {/* <Controller name='description' control={control} render={({ field }) => <TextArea placeholder='issues' />} /> */}
                <TextArea placeholder='issues' {...register('description')} />
                <Button>Submit New Issue</Button>
            </form>
        </div>
    )
}

export default NewIssuePage