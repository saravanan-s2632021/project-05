import { Card } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <div className="home">
        <Card>
          <Card.Title className="title">State Bank Of India</Card.Title>
          <Card.Img
            className="saran"
            variant="top"
            src="https://concept-stories.s3.ap-south-1.amazonaws.com/test/Stories%20-%20Images_story_77297/image_2019-08-08%2013%3A36%3A40.917446%2B00%3A00"
            width="20px"
            height="350"
          />
          <Card.Body>
            <Card.Text>SMALL SAVING FOR YOUR BIG FUTURE</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
