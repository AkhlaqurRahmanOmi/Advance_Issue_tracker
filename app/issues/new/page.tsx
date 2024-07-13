'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import { useForm, Controller } from 'react-hook-form'
import React from 'react'
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
    return (
        <form className='max-w-xl space-y-5' onSubmit={handleSubmit(async (data) => {
            await axios.post('/api/issues', data)
            router.push('/issues')
        })}>
            <TextField.Root placeholder='title' {...register('title')} />
            {/* <Controller name='description' control={control} render={({ field }) => <TextArea placeholder='issues' />} /> */}
            <TextArea placeholder='issues' {...register('description')} />
            <Button>Submit New Issue</Button>

        </form>
    )
}

export default NewIssuePage