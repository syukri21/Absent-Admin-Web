export interface GradesByScheduleId {
    students?: StudentsEntity[] | null
    count: number
}
export interface StudentsEntity {
    studentId: number
    scheduleId: number
    semester: number
    courseId: number
    grade?: Grade | null
    student: Student
}
export interface Grade {
    attendance: number
    assignment: number
    uts: number
    uas: number
    weightValue: number
    letterValue: string
}
export interface Student {
    ID: number
    CreatedAt: string
    UpdatedAt: string
    DeletedAt?: null
    userId: number
    nim: string
    fullname: string
}

export interface GradesByScheduleIdParams {
    scheduleId: number
    data: {
        limit: number
        offset: number
    }
}

export interface GradesCreateParams {
    studentId: number
    scheduleId: number
    data: Grade
}
