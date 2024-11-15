import { Card, Typography, Button } from "@material-tailwind/react";

export function SimpleCard() {
  return (
    <Card className="max-w-xs">
      <Card.Body>
        <Typography type="h6">UI/UX Review Check</Typography>
        <Typography className="my-1 text-foreground">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in
          Barcelona.
        </Typography>
      </Card.Body>
      <Card.Footer>
        <Button isFullWidth>Read More</Button>
      </Card.Footer>
    </Card>
  );
}
