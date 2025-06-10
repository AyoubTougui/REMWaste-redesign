import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API_URL } from "../../../utils/consts";

const fetchSkips = () => axios.get(API_URL);

export const useGetSkips = () =>
  useQuery({
    queryKey: ["fetchSkips"],
    queryFn: fetchSkips,
  });
