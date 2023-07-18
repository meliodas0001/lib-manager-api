-- AddForeignKey
ALTER TABLE "Loans" ADD CONSTRAINT "Loans_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
