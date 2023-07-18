import { LoansService } from '@app/useCases/Loans/loans.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LoansDTO, LoansParam, LoansPutDTO } from '../dtos/ILoansDTO';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

interface LoanParamDTO {
  id: string;
}

@ApiTags('Loans')
@Controller('loans')
export class LoansController {
  constructor(private loansService: LoansService) {}

  @ApiOperation({ summary: 'Retrieves a list of all loans.' })
  @ApiResponse({
    status: 200,
    description: 'List of loans.',
    type: LoansDTO,
    isArray: true,
  })
  @Get()
  async findAllLoans(): Promise<LoansDTO[]> {
    const loans = await this.loansService.loansGetAll();
    return loans;
  }

  @ApiOperation({ summary: 'Creates a new loan.' })
  @ApiBody({ type: LoansDTO })
  @ApiResponse({
    status: 201,
    description: 'The loan has been successfully created.',
  })
  @Post()
  async createLoan(@Body() loan: LoansDTO) {
    await this.loansService.loansCreate(loan);
  }

  @ApiOperation({ summary: 'Updates a loan.' })
  @ApiBody({ type: LoansPutDTO })
  @ApiResponse({
    status: 200,
    description: 'The loan has been successfully updated.',
  })
  @Put()
  async updateLoan(@Body() loan: LoansDTO) {
    await this.loansService.updateLoan(loan);
  }

  @ApiOperation({ summary: 'Deletes a loan by ID.' })
  @ApiParam({ name: 'id', description: 'ID of the loan', type: 'string' })
  @ApiResponse({
    status: 200,
    description: 'The loan has been successfully deleted.',
  })
  @Delete(':id')
  async deleteLoan(@Param() params: LoanParamDTO) {
    const { id } = params;
    await this.loansService.deleteLoan(id);
  }
}
