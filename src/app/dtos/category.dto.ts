import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validate, validateOrReject } from "class-validator";
// hay que tener en cuenta que si inicia en mayuscula es un decorador, pero si inicia en minuscula es una funcion

import { AccessType, Category } from "../models/category.model";

export interface ICreateCategoryDto extends Omit<Category, 'id'> { }

export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(3, 50)
  name!: string;

  // hay que habilitar la propiedad experimetnalDecorators en el tsconfig.json para poder usar los decoradores ya que estan viendo que sean nativos de javascript
  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType) // valida que sea un enum de AccessType
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'A';
    // los decoradores no marcan errores como typescript, sino que lanzan excepciones en la ejecucion
    const validation = await validate(dto); // valida el objeto, pero no lanza excepcion si hay errores
    console.log('validate function', validation);

    await validateOrReject(dto); // valida el objeto y lanza una excepcion si hay errores
  } catch (error) {
    console.error(error);
  }
})();
