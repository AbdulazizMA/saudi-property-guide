'use client'

import { InlineWidget } from 'react-calendly'

interface CalendlyWidgetProps {
    url: string
    height?: string
}

export default function CalendlyWidget({ url, height = '700px' }: CalendlyWidgetProps) {
    return (
        <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
            <InlineWidget
                url={url}
                styles={{
                    height,
                    width: '100%',
                }}
            />
        </div>
    )
}
