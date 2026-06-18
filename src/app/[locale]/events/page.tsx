import { getTranslations } from "next-intl/server";
import { createClient } from "@supabase/supabase-js"
import Image from "next/image"

async function EventsData(n?: number) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    );

    let query = supabase.from("Events").select();

    if (n !== undefined) {
      query = query.limit(n);
    }

    const { data, error } = await query;

    if (error) {
      console.error(error);
      return null;
    }

    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function EventCards({ data }: any) {
    const t = await getTranslations("EventsPage");


    if (!data || data.length === 0) {
        return (
        <div className="col-center" style={{marginTop: 50, gap: 15, maxWidth: 450}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="var(--almost-black-color)" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.08,64a8,8,0,1,1-13.84,8c-7.47-12.91-19.21-20-33.08-20s-25.61,7.1-33.08,20a8,8,0,1,1-13.84-8c10.29-17.79,27.39-28,46.92-28S164.63,154.2,174.92,172Z"></path></svg>
            <p style={{textAlign: "center"}}>{t('error-msg')}</p>
        </div>
        );
    }

    return (
        <>
            {data.map((event: any) => (
                <div key={`event-card-${event.id}`} className="row" style={{marginTop: 25, marginBottom: 50, flexWrap: "wrap"}}>
                    <div className="col event-card">
                        <Image
                            alt="Event thumbnail"
                            width={300}
                            height={200}
                            src={event.image_url}
                        />
                        <div className="card-white" style={{zIndex: 1}}>
                            <p className="bold">{event.name}</p>
                            <div className="row" style={{gap: 15, marginBottom: 10}}>
                                <div className="icon-row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#39707f" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,168a16,16,0,1,1,16-16A16,16,0,0,1,128,168Zm80-88H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"></path></svg>
                                    <p>{event.start_date}</p>
                                </div>
                                <div className="icon-row">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#39707f" viewBox="0 0 256 256"><path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"></path></svg>
                                    <p>{event.location}</p>
                                </div>
                            </div>
                            <p>{event.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default async function EventPage() {
  const t = await getTranslations("EventsPage");
  const data = await EventsData();

  return (
    <div className="col-center">
      <h1>{t("title")}</h1>
      <p className="sub-title">{t("sub-title")}</p>
      <EventCards data={data} />
    </div>
  );
}