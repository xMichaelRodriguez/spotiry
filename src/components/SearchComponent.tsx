import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  useColorModeValue,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  search: string;
};
export const SearchComponent = ({
  handleSearch,
}: {
  handleSearch: ({ query }: { query: string }) => Promise<void>;
}) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = ({ search }) => handleSearch({ query: search });

  return (
    <>
      <Box bg={useColorModeValue('gray.900', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'center'}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl width={'100%'} textColor="whiteAlpha.700">
              <Input
                width={'100%'}
                autoComplete="off"
                type="search"
                placeholder="Search Music"
                {...register('search')}
                borderColor="whiteAlpha.500"
              />
            </FormControl>
          </form>
        </Flex>
      </Box>
    </>
  );
};
