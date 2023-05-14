import { useId } from "react";

export default function useUniqueId () {
  const id = useId();
  return id;
}