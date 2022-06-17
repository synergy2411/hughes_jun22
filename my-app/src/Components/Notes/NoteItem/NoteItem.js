import NoteDate from "../NoteDate/NoteDate";

const NoteItem = (props) => {
    return (
        <div className="col-4">
            <div className="card">
                <div className="card-header">
                    <h5 className="text-center">
                        {props.note.title.toUpperCase()}
                    </h5>
                </div>
                <div className="card-body">
                    <p className="lead">Amount : ${props.note.amount}</p>
                    {/* <em>Created At : {props.note.createdAt.toString()}</em> */}
                    <NoteDate createdAt={props.note.createdAt} />
                </div>
            </div>
        </div>
    )
}

export default NoteItem;