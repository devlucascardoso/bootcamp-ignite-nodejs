import { Specification } from "@modules/cars/entities/Specification";

import { getRepository, Repository } from "typeorm";
import {
  ICreateSpecificationsDTO,
  ISpecificationRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ description, name }: ICreateSpecificationsDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = this.repository.findOne({ name });
    return specification;
  }
}

export { SpecificationsRepository };
