import { Status } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
import React from 'react'

const statusMap: Record<Status, { label: string, color: 'red' | 'green' | 'blue' }> = {
    OPEN: { label: 'Open', color: 'red' },
    CLOSED: { label: 'Closed', color: 'green' },
    IN_PROGRESS: { label: 'Progress', color: 'blue' },
}
const StatusBadge = ({ status }: { status: Status }) => {
    return (
        <Badge color={statusMap[status].color}>
            {statusMap[status].label}
        </Badge>
    )
}

export default StatusBadge