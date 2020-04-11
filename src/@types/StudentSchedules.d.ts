export interface Course {
    ID: number
    name: string
    totalSks: number
    semester: number
}

export interface Student {
    ID: number
    CreatedAt: Date
    UpdatedAt: Date
    DeletedAt?: any
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
    absentTime: Date
    Student?: any
    Teacher?: any
    CreatedAt: Date
    UpdatedAt: Date
    DeletedAt?: any
}

export default interface StudentSchedule {
    studentId: number
    scheduleId: number
    semester: number
    courseId: number
    course: Course
    student: Student
    Absent: Absent
}
