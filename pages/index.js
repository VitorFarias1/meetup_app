import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUP = [
    {
        id: "m1",
        title: "First Meetup",
        image: "https://www.shutterstock.com/image-photo/st-pauls-cathedral-anglican-london-600w-2628751361.jpg",
        address: "5 street, 5432, some City"
    },
    {
        id: "m2",
        title: "Second Meetup",
        image: "https://www.shutterstock.com/image-photo/st-pauls-cathedral-anglican-london-600w-2628751361.jpg",
        address: "5 street, 5432, some City"
    }
]

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUP} />
}

export default HomePage;