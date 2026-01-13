-- ================================
-- BANCO DE DADOS: SIMULADOR ENERGIA
-- ================================

-- Apaga o banco se existir (útil em ambiente de teste)
DROP DATABASE IF EXISTS simulador_energia;

-- Cria o banco
CREATE DATABASE simulador_energia
CHARACTER SET utf8mb4
COLLATE utf8mb4_general_ci;

USE simulador_energia;

-- ================================
-- TABELA: USUÁRIOS
-- ================================
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  senha_hash VARCHAR(255) NOT NULL,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ================================
-- TABELA: LOGS DE ACESSOS
-- ================================
CREATE TABLE logs_acessos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  acao VARCHAR(255) NOT NULL,
  data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- ================================
-- TABELA: FORNECEDORES
-- ================================
CREATE TABLE fornecedores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,

  potencia_contratada DECIMAL(10,2),
  valor_potencia DECIMAL(10,2),
  valor_acesso_potencia DECIMAL(10,2),

  valor_consumo DECIMAL(10,4),
  valor_acesso_consumo DECIMAL(10,2),

  atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ================================
-- TABELA: SIMULAÇÕES
-- ================================
CREATE TABLE simulacoes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT,
  consumo_kwh DECIMAL(10,2),

  melhor_fornecedor VARCHAR(150),
  custo_atual DECIMAL(10,2),
  custo_simulado DECIMAL(10,2),
  economia DECIMAL(10,2),

  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- ================================
-- DADOS INICIAIS (SEED)
-- ================================
INSERT INTO fornecedores
(nome, potencia_contratada, valor_potencia, valor_acesso_potencia, valor_consumo, valor_acesso_consumo)
VALUES
('Fornecedor A', 50, 120.00, 35.00, 0.7800, 18.00),
('Fornecedor B', 50, 110.00, 30.00, 0.7400, 22.00),
('Fornecedor C', 50, 130.00, 28.00, 0.7000, 25.00);
