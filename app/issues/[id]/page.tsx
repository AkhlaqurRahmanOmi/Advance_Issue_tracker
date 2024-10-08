import StatusBadge from '@/app/components/StatusBadge'
import prisma from '@/prisma/client'
import { Card, Flex, Heading, Text } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import React from 'react'
import { number } from 'zod'
import MarkDown from 'react-markdown'


const IssueDetailPage = async ({ params }: { params: { id: string } }) => {
    // if (typeof params.id !== 'number') notFound()
    const issue = await prisma.issue.findUnique(
        {
            where:
            {
                id: parseInt(params.id)
            }
        })
    if (!issue)
        notFound()
    return (
        <div>
            <Heading>{issue.title}</Heading>
            <Flex className='space-x-3' my='2'>
                <StatusBadge status={issue.status} />
                <Text>{issue.createdAt.toDateString()}</Text>
            </Flex>
            <Card className='prose' mt='4'>
                <MarkDown>{issue.description}</MarkDown>
            </Card>
        </div>
    )
}

export default IssueDetailPage