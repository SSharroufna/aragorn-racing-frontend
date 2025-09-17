import RacesCalender from "@/app/schedule/components/races-calender";
import PageWrapper from "@/components/layout/page-wrapper";
import Stack from "@/components/layout/stack";

export default function RaceSchedule() {

    return (
        <PageWrapper>
            <Stack className={'max-w-2/3'}>
                <h1 className="text-2xl font-semibold">Browse Races</h1>
                <RacesCalender/>
            </Stack>

        </PageWrapper>
    )
}