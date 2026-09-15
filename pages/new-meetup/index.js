import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetupPage() {
    function HandleMeetupForm(enteredMeetup) {
        console.log(enteredMeetup)
    }

    return <NewMeetupForm onAddMeetup={HandleMeetupForm} />
}

export default NewMeetupPage;