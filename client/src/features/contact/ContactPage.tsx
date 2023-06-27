import { Button, ButtonGroup, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  CounterState,
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  decrement,
  increment,
} from "./counterReducer";

export default function ContactPage() {
  const dispatch = useDispatch();
  const { data, title } = useSelector((state: CounterState) => state);
  return (
    <>
      <Typography variant="h2">Contact Page</Typography>
      {data}-{title}
      <ButtonGroup>
        <Button
          onClick={() => dispatch(increment())}
          variant="contained"
          color="error"
        >
          increment
        </Button>
        <Button
          onClick={() => dispatch(decrement())}
          variant="contained"
          color="primary"
        >
          Decrement
        </Button>
      </ButtonGroup>
    </>
  );
}
