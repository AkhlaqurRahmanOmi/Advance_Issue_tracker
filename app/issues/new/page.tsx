'use client'
import { Button, Callout, TextArea, TextField, Text } from '@radix-ui/themes'
import { useForm, Controller } from 'react-hook-form'
import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from '@/app/ValidationSchema'
import { z } from 'zod'
import ErrorMessage from '@/app/components/ErrorMessage'
// import SimpleMDE from "react-simplemde-editor";
// import "easymde/dist/easymde.min.css";


// interface IssueForm {
//     title: string,
//     description: string
// }

type IssueForm = z.infer<typeof schema>;

const NewIssuePage = () => {
    const router = useRouter()
    const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>(
        {
            resolver: zodResolver(schema)
        }
    );
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
                <ErrorMessage>{errors.title?.message}</ErrorMessage>
                {/* <Controller name='description' control={control} render={({ field }) => <TextArea placeholder='issues' />} /> */}
                <TextArea placeholder='issues' {...register('description')} />
                <ErrorMessage>{errors.description?.message}</ErrorMessage>
                <Button>Submit New Issue</Button>
            </form>
        </div>
    )
}

export default NewIssuePage