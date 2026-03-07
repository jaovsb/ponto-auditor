# 🕒 Ponto Auditor | Solução de Auditoria de Jornada

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007acc.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

O **Ponto Auditor** é uma ferramenta de alta performance desenvolvida para simplificar a auditoria de banco de horas. Criada para resolver a complexidade de somar e subtrair períodos de tempo que extrapolam as 8h de trabalho convencionais, unindo precisão matemática com uma interface moderna e intuitiva.

---

## 📺 Preview

> [!TIP]
> **Adicione aqui um GIF ou Screenshot do seu projeto rodando!** (Isso aumenta em 80% as chances de um recrutador olhar seu repositório).

---

## ✨ Diferenciais de Engenharia & UX

Diferente de calculadoras de tempo comuns, este projeto foi construído com foco em **usabilidade de nível empresarial**:

* **Máscara de Input Reversa (Smart UX):** Implementação de lógica que formata o tempo (`HHH:mm:ss`) em tempo real enquanto o usuário digita apenas os números, eliminando a necessidade de inserir pontuação manualmente.
* **Motor de Cálculo Reativo:** Lógica isolada para conversão de tempo em segundos, garantindo cálculos precisos para saldos positivos e negativos (Saldo Devedor vs. Saldo Credor).
* **Arquitetura Desacoplada:** Organização de pastas seguindo padrões de mercado (`/types`, `/utils`, `/components`), facilitando a manutenção e escalabilidade do código.
* **Interface Premium:** Design construído com Tailwind CSS, focado em legibilidade, com feedback visual dinâmico de cores baseado no status da auditoria.

---

## 🚀 Funcionalidades

- [x] Adição dinâmica de múltiplos registros.
- [x] Alternância instantânea entre Soma (+) e Subtração (-).
- [x] Cálculo automático de saldo total com `useMemo` para performance.
- [x] Função "Limpar Tudo" para reset rápido de jornada.
- [x] Responsividade total para uso em Desktop ou Mobile.

---

## 🛠️ Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/jaovsb/ponto-auditor.git](https://github.com/jaovsb/ponto-auditor.git)
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Rode o ambiente de desenvolvimento:**
    ```bash
    npm run dev
    ```

---

## 🧠 Conceitos de React Aplicados

Para demonstrar maturidade técnica, utilizei:
- **Imutabilidade:** Atualização de estado usando padrões de cópia de array (`...spread`).
- **Hooks Avançados:** `useState`, `useMemo` e `useCallback` para otimização de renderização.
- **TypeScript Generics:** Tipagem estrita em funções de atualização para evitar o uso de `any`.

---

### 👨‍💻 Autor

**João Victor Silva Barros** *Graduado em ADS | Desenvolvedor Front-end em ascensão*

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jaovsb)
