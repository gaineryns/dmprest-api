import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

class UpdateDto {
  email?: string;
  name?: string;
  password?: string;
  street?: string;
  city?: string;
  country?: string;
}
export default UpdateDto;
