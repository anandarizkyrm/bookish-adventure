import { useQuery, UseQueryResult } from "@tanstack/react-query";

const useGetData = ({
    type,
    queryFn,
}: {
    type: string;
    queryFn: any;
}): UseQueryResult<any> => {
    return useQuery([type], queryFn);
};

export default useGetData;
