import CreateSchedule, { handleCreateSchedule, CreateScheduleParams } from "../../../../../../provider/CreateSchedule"

interface useCreateSchedule {
    loading: boolean
    error: any
    data: any
    handleCreateSchedule: (prams: CreateScheduleParams) => void
}

export default function useCreateSchedule() {
    const [createSchedule] = CreateSchedule.useGlobal()

    function onCreateSchedule(params: CreateScheduleParams) {
        return handleCreateSchedule(params)
    }

    return {
        ...createSchedule,
        handleCreateSchedule: onCreateSchedule
    }
}
