export interface StudentsByScheduleId {
    students?: StudentsEntity[] | null
    count: number
}
export interface StudentsEntity {
    studentId: number
    scheduleId: number
    semester: number
    courseId: number
    course?: null
    student: Student
    Absent?: Absent | null
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
export interface Absent {
    scheduleId: number
    studentId: number
    teacherId: number
    couresId: number
    numberOfMeeting: number
    semester: number
    absentTime: string
    Student?: null
    Teacher?: null
    CreatedAt: string
    UpdatedAt: string
    DeletedAt?: null
}
