export default function TimestampPageForm({value, title}: {value: string, title: string}) {
    return (
        <div className="w-full flex leading-10 px-4">
            <div>{title}</div>
            <div className="flex-1"></div>
            <div>{value}</div>
        </div>
    )
}