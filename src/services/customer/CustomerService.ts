// Em GetCustomerService.ts
import { CreateCustomer } from "../../models/interfaces/customer/CreateCustomer";
import prismaClient from "../../prisma";

class CustomerService {
  
  async create({ name, email, cpf, cnpj, branchCode, branchId }: CreateCustomer) {

    const customer = await prismaClient.customer.create({
      data: {
        name: name,
        email: email,
        cpf: cpf,
        cnpj: cnpj,
        branchCode: branchCode,
        branchId: branchId
      },
    });
    return customer;
  }

  async findCustomerByCpf(cpf: string) {
    return prismaClient.customer.findMany({
      where: { cpf },
    });
  }

  async searchCustomers(query: string) {
    return prismaClient.customer.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            cpf: {
              equals: query,
            },
          },
        ],
      },
    });
  }
}

export { CustomerService };
