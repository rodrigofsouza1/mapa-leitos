# 🏥 Mapa de Leitos — HC UNICAMP

Aplicativo web para visualização interativa dos leitos hospitalares do HC-UNICAMP, organizado por andar, bloco e posto de enfermagem.

## ✨ Funcionalidades

- **Mapa visual** dos leitos por andar (2º ao 6º)
- **Cores por status**: 🟢 Livre | 🔴 Ocupado | 🟡 Isolamento | ⚪ Sem dados
- **Tooltip ao hover**: nome, registro, especialidade, sexo, isolamento
- **Filtros**: andar, posto, especialidade, sexo, isolamento, status
- **Dashboard**: contadores em tempo real
- **Upload de CSV**: carregue os dados direto no navegador

## 🚀 Como usar

1. Abra o arquivo `index.html` em qualquer navegador moderno
2. Clique em **📁 Carregar CSV** e selecione seu arquivo `.csv`
3. Os leitos serão coloridos automaticamente e os filtros populados
4. Passe o mouse sobre leitos ocupados para ver os detalhes

> ⚡ Não precisa de servidor — funciona 100% offline no navegador.

## 📄 Formato do CSV

O arquivo CSV deve conter as seguintes colunas (separadas por vírgula):

| Coluna | Descrição | Exemplo |
|---|---|---|
| `andar` | Número do andar (2-6) | `2` |
| `posto_enfermagem` | Código do posto | `D2P1`, `E4P2`, `C5P3` |
| `leito` | Identificador do leito | `201A`, `E4P1-01` |
| `status` | `ocupado` ou `desocupado` | `ocupado` |
| `nome_paciente` | Nome do paciente | `Maria Silva` |
| `registro_hospitalar` | Número de registro | `12345` |
| `especialidade` | Especialidade titular | `Cardiologia` |
| `sexo` | `M` ou `F` | `F` |
| `isolamento` | Tipo de isolamento | `Nenhum`, `Contato`, `Respiratório` |

> Para leitos desocupados, as colunas de paciente podem ficar vazias.

Um arquivo de exemplo está incluído: `exemplo_leitos.csv`

## 🏗️ Estrutura do Hospital

| Andar | Postos | Tipo |
|---|---|---|
| 2º | D2P1-D2P3, E2P1-E2P4 | UTIs |
| 3º | D3P1 | UTI Transplantes |
| 4º | C4P1-C4P4, E4P1-E4P4 | Pediatria + Enfermarias |
| 5º | C5P1-C5P4, E5P1-E5P4 | Enfermarias |
| 6º | C6P1-C6P4, E6P1-E6P4 | Enfermarias |

## 📂 Arquivos

```
├── index.html          # Página principal
├── style.css           # Estilos
├── app.js              # Lógica do aplicativo
├── exemplo_leitos.csv  # Dados de exemplo
└── README.md           # Este arquivo
```

## 🖥️ Requisitos

- Navegador moderno (Chrome, Firefox, Edge, Safari)
- Nenhuma dependência externa