import { Button, ButtonGroup, Typography } from "@mui/material";
import { decrement, increment } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";

export default function ContactPage() {
  const dispatch = useAppDispatch();
  const { data, title } = useAppSelector((state) => state.counter);
  return (
    <>
      <Typography variant="h2">Contact Page</Typography>
      {data}-{title}
      <ButtonGroup>
        <Button
          onClick={() => dispatch(increment(1))}
          variant="contained"
          color="error"
        >
          increment
        </Button>
        <Button
          onClick={() => dispatch(decrement(1))}
          variant="contained"
          color="primary"
        >
          Decrement
        </Button>
      </ButtonGroup>
    </>
  );
}
