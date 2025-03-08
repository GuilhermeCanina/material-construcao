-- CreateTable
CREATE TABLE `Clientes` (
    `id_clientes` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `cnpj` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Clientes_cpf_key`(`cpf`),
    UNIQUE INDEX `Clientes_cnpj_key`(`cnpj`),
    UNIQUE INDEX `Clientes_email_key`(`email`),
    PRIMARY KEY (`id_clientes`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcionarios` (
    `id_funcionarios` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `nasc` DATETIME(3) NOT NULL,
    `salario` DOUBLE NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `funcionarios_cpf_key`(`cpf`),
    UNIQUE INDEX `funcionarios_email_key`(`email`),
    PRIMARY KEY (`id_funcionarios`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produtos` (
    `id_produtos` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `quantidade` INTEGER NOT NULL,
    `preco_compra` DOUBLE NOT NULL,
    `preco_venda` DOUBLE NOT NULL,
    `fornecedor` VARCHAR(191) NOT NULL,
    `imagemUrl` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_produtos`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
