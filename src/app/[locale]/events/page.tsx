import { useTranslations } from "next-intl"
import { createClient } from "@supabase/supabase-js"

async function EventsData() {
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!)
    const { data: events } = await supabase.from("events").select()

    return <pre>{JSON.stringify(events)}</pre>
}

export default function EventPage() {
    const t = useTranslations('EventsPage')
    return (
        <div className="col-center">
            <h1>{t('title')}</h1>
            <p className="sub-title">{t('sub-title')}</p>
            <EventsData />
        </div>
    )
}