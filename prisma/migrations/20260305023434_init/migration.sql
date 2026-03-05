-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);
