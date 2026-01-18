## Tailwind do Projeto

        div Principal :
                .w-screen : {
                        width:100vh
                }
         => signfica que existe uma classe chamada .w-screen com a propriedade definida como 100vw, dizendo então para ocupar 100% da tela em largura


                .h-screen :{
                        height: 100vh
                }
        => signfica que existe uma classe chamada .h-screen com a propriedade definida como 100vh, dizendo então para ocupar 100% da tela emm altura


                .bg-slate-500 {
                        background-color: var(--color-slate-500) /* oklch(55.4% 0.046 257.417) = #62748e */;
                }
        => significa que existe uma classe chamada .bg-slate-500 que contêm a propriedade "background-color" atribuindo uma variavel contendo a tag "--color" com o valor de "slate-500" que significa a cor utilizada.


                .flex {
                        display: flex;
                }
        =>  signfica que existe uma classe chamada de .flex onde diz que o display é igual a flex


                .justify-center {
                        justify-content: center;
                }
        => signfica que existe uma classe chamada .justify-center, sendo ela exclusiva de display flex e contendo a propriedade justify-content igual a center, centralizando os itens;


                .p-6 {
                        padding: calc(var(--spacing) * 6) /* 1.5rem = 24px */;
                }
        => signfica que o padding será igual a um calculo(calc) que contem uma variavel com a tag "--spacing" que multiplica por 6, o que significa 24px;

## - O restante das classes abaixo do tailwin, com base no que viu acima, pode sub-entender para o que cada um serve.

        div secundaria :

                .w-125 {
                        width: 500px;
                }
        => signfica que o elemento terá um tamanho de 500px

                 .space-y-4 {
                        :where(& > :not(:last-child)) {
                                --tw-space-y-reverse: 0;
                                margin-block-start: calc(calc(var(--spacing) * 4) /* 1rem = 16px */ * var(--tw-space-y-reverse));
                                margin-block-end: calc(calc(var(--spacing) * 4) /* 1rem = 16px */ * calc(1 - var(--tw-space-y-reverse)));
                        }
                }
                @property --tw-space-y-reverse {
                        syntax: "*";
                        inherits: false;
                        initial-value: 0;
                }
        => significa dar um espaçamento entre os elementos

        h1:

                .text-3xl {
                        font-size: var(--text-3xl) /* 1.875rem = 30px */;
                        line-height: var(--tw-leading, var(--text-3xl--line-height) /* calc(2.25 / 1.875) ≈ 1.2 */);
                }
        => significa que um elemento terá como tamanho de fonte(caso seja texto) um tamanho de 30px e uma altura de linha de 1.2


                .text-slate-100 {
                        color: var(--color-slate-100) /* oklch(96.8% 0.007 247.896) = #f1f5f9 */;
                }


                .font-bold {
                        --tw-font-weight: var(--font-weight-bold) /* 700 */;
                        font-weight: var(--font-weight-bold) /* 700 */;
                }
                @property --tw-font-weight {
                        syntax: "*";
                        inherits: false;
                }



                .text-center {
                        text-align:
                }

## Component Task

        ul :
                .space-y-4 {
                        :where(& > :not(:last-child)) {
                                --tw-space-y-reverse: 0;
                                margin-block-start: calc(calc(var(--spacing) * 4) /* 1rem = 16px */ * var(--tw-space-y-reverse));
                                margin-block-end: calc(calc(var(--spacing) * 4) /* 1rem = 16px */ * calc(1 - var(--tw-space-y-reverse)));
                        }
                }
                @property --tw-space-y-reverse {
                        syntax: "*";
                        inherits: false;
                        initial-value: 0;
                }
        => significaa que existirá um espaço entre os elementos dentro da lista(ul), tendo cada elemento (li) um espaçamento de 16px;


                .p-6 {
                        padding: calc(var(--spacing) * 6) /* 1.5rem = 24px */;
                }

                .bg-slate-200 {
                        background-color: var(--color-slate-200) /* oklch(92.9% 0.013 255.508) = #e2e8f0 */;
                }

                .rounded-md {
                        border-radius: var(--radius-md) /* 0.375rem = 6px */;
                }

                .shadow {
                        --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
                        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
                }
        => significa que terá uma sombra ao tedor do elemento


        li :

                .flex {
                        display: flex;
                }

                .gap-2 {
                        gap: calc(var(--spacing) * 2) /* 0.5rem = 8px */;
                }


        button-1 :


                .bg-slate-400 {
                        background-color: var(--color-slate-400) /* oklch(70.4% 0.04 256.788) = #90a1b9 */;
                }

                .text-left {
                        text-align: left;
                }

                .w-full {
                        width: 100%;
                }

                .text-white {
                        color: var(--color-white) /* #fff = #ffffff */;
                }

                .p-2 {
                        padding: calc(var(--spacing) * 2) /* 0.5rem = 8px */;
                }

                .rounded-md {
                        border-radius: var(--radius-md) /* 0.375rem = 6px */;
                }
        => significa que o elemento li terá uma borda radius(borda arredondada) de 6px, um padrão


        button-2 :

                .bg-slate-400 {
                        background-color: var(--color-slate-400) /* oklch(70.4% 0.04 256.788) = #90a1b9 */;
                }

                .p-2 {
                        padding: calc(var(--spacing) * 2) /* 0.5rem = 8px */;
                }

                .rounded-md {
                        border-radius: var(--radius-md) /* 0.375rem = 6px */;
                }

                .text-white {
                        color: var(--color-white) /* #fff = #ffffff */;
                }

        button-3 :

                 .bg-slate-400 {
                        background-color: var(--color-slate-400) /* oklch(70.4% 0.04 256.788) = #90a1b9 */;
                }

                .p-2 {
                        padding: calc(var(--spacing) * 2) /* 0.5rem = 8px */;
                }

                .rounded-md {
                        border-radius: var(--radius-md) /* 0.375rem = 6px */;
                }

                .text-white {
                        color: var(--color-white) /* #fff = #ffffff */;
                }

## Component AddTask

        div :
                .space-y-4 {
                        :where(& > :not(:last-child)) {
                                --tw-space-y-reverse: 0;
                                margin-block-start: calc(calc(var(--spacing) * 4) /* 1rem = 16px */ * var(--tw-space-y-reverse));
                                margin-block-end: calc(calc(var(--spacing) * 4) /* 1rem = 16px */ * calc(1 - var(--tw-space-y-reverse)));
                        }
                }
                        @property --tw-space-y-reverse {
                        syntax: "*";
                        inherits: false;
                        initial-value: 0;
                }

                .p-6 {
                        padding: calc(var(--spacing) * 6) /* 1.5rem = 24px */;
                }

        => classe utilizada para dar espaçamento enntre os elementos dentro da div

                .bg-slate-200 {
                        background-color: var(--color-slate-200) /* oklch(92.9% 0.013 255.508) = #e2e8f0 */;
                }

                .rounded-md {
                        border-radius: var(--radius-md) /* 0.375rem = 6px */;
                }

                .shadow {
                        --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
                        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
                }

                .flex {
                        display: flex;
                }

                .flex-col {
                        flex-direction: column;
                }
        => significa que se um elemento possui o display flex, existe a possibilidade de ordenar os elementos em colunas com o flex-direction collum(flex-col);

        input-1 :

                .border {
                        border-style: var(--tw-border-style);
                        border-width: 1px;
                }
                @property --tw-border-style {
                        syntax: "*";
                        inherits: false;
                        initial-value: solid;
                }

                .border-slate-300 {
                        border-color: var(--color-slate-300) /* oklch(86.9% 0.022 252.894) = #cad5e2 */;
                }

                .outline-slate-400 {
                        outline-color: var(--color-slate-400) /* oklch(70.4% 0.04 256.788) = #90a1b9 */;
                }
        => significa que ao apertar no elemento input, o outline dele apresentára uma cor diferente

                .px-4 {
                        padding-inline: calc(var(--spacing) * 4) /* 1rem = 16px */;
                }
        => significa dar um espaçamento interno na horizontal
                .py-2 {
                        padding-block: calc(var(--spacing) * 2) /* 0.5rem = 8px */;
                }
        => significa dar um espaçamento interno na vertical

                .rounded-md {
                        border-radius: var(--radius-md) /* 0.375rem = 6px */;
                }

        input-2 :

                 .border {
                        border-style: var(--tw-border-style);
                        border-width: 1px;
                }
                @property --tw-border-style {
                        syntax: "*";
                        inherits: false;
                        initial-value: solid;
                }

                .border-slate-300 {
                        border-color: var(--color-slate-300) /* oklch(86.9% 0.022 252.894) = #cad5e2 */;
                }

                .outline-slate-400 {
                        outline-color: var(--color-slate-400) /* oklch(70.4% 0.04 256.788) = #90a1b9 */;
                }
        => significa que ao apertar no elemento input, o outline dele apresentára uma cor diferente

                .px-4 {
                        padding-inline: calc(var(--spacing) * 4) /* 1rem = 16px */;
                }
        => significa dar um espaçamento interno na horizontal
                .py-2 {
                        padding-block: calc(var(--spacing) * 2) /* 0.5rem = 8px */;
                }
        => significa dar um espaçamento interno na vertical

                .rounded-md {
                        border-radius: var(--radius-md) /* 0.375rem = 6px */;
                }

        button :

                .bg-slate-500 {
                        background-color: var(--color-slate-500) /* oklch(55.4% 0.046 257.417) = #62748e */;
                }

                .text-white {
                        color: var(--color-white) /* #fff = #ffffff */;
                }

                .px-4 {
                        padding-inline: calc(var(--spacing) * 4) /* 1rem = 16px */;
                }

                .py-2 {
                        padding-block: calc(var(--spacing) * 2) /* 0.5rem = 8px */;
                }

                .rounded-md {
                        border-radius: var(--radius-md) /* 0.375rem = 6px */;
                }

                .font-medium {
                        --tw-font-weight: var(--font-weight-medium) /* 500 */;
                        font-weight: var(--font-weight-medium) /* 500 */;
                }
                @property --tw-font-weight {
                        syntax: "*";
                        inherits: false;
                }

## Component TaskPage

                div:
                        .h-screen {
                                height: 100vh;
                        }

                        .w-screen {
                                width: 100vw;
                        }

                        .bg-slate-500 {
                                background-color: var(--color-slate-500) /* oklch(55.4% 0.046 257.417) = #62748e */;
                        }

                        .p-6 {
                                padding: calc(var(--spacing) * 6) /* 1.5rem = 24px */;
                        }

                div:

                        .flex {
                                display: flex;
                        }

                        .justify-center {
                                justify-content: center;
                        }

                        .relative {
                                position: relative;
                        }

                        .mb-6 {
                                margin-bottom: calc(var(--spacing) * 6) /* 1.5rem = 24px */;
                        }


                /button:

                        .absolute {
                                position: absolute;
                        }

                        .left-0 {
                                left: calc(var(--spacing) * 0) /* 0rem = 0px */;
                        }

                        .top-0 {
                                top: calc(var(--spacing) * 0) /* 0rem = 0px */;
                        }

                        .bottom-0 {
                                bottom: calc(var(--spacing) * 0) /* 0rem = 0px */;
                        }

                        .text-slate-100 {
                                color: var(--color-slate-100) /* oklch(96.8% 0.007 247.896) = #f1f5f9 */;
                        }

                /h1:

                        .text-3xl {
                                font-size: var(--text-3xl) /* 1.875rem = 30px */;
                                line-height: var(--tw-leading, var(--text-3xl--line-height) /* calc(2.25 / 1.875) ≈ 1.2 */);
                        }

                        .text-slate-100 {
                                color: var(--color-slate-100) /* oklch(96.8% 0.007 247.896) = #f1f5f9 */;
                        }

                        .font-bold {
                                --tw-font-weight: var(--font-weight-bold) /* 700 */;
                                font-weight: var(--font-weight-bold) /* 700 */;
                        }
                        @property --tw-font-weight {
                                syntax: "*";
                                inherits: false;
                        }

                        .text-center {
                                text-align: center;
                        }


                div :

                        .bg-slate-200 {
                                background-color: var(--color-slate-200) /* oklch(92.9% 0.013 255.508) = #e2e8f0 */;
                        }

                        .p-4 {
                                padding: calc(var(--spacing) * 4) /* 1rem = 16px */;
                        }

                        .rounded-md {
                                border-radius: var(--radius-md) /* 0.375rem = 6px */;
                        }

                /h2:

                        .text-xl {
                                font-size: var(--text-xl) /* 1.25rem = 20px */;
                                line-height: var(--tw-leading, var(--text-xl--line-height) /* calc(1.75 / 1.25) ≈ 1.4 */);
                        }

                        .font-bold {
                                --tw-font-weight: var(--font-weight-bold) /* 700 */;
                                font-weight: var(--font-weight-bold) /* 700 */;
                        }
                        @property --tw-font-weight {
                                syntax: "*";
                                inherits: false;
                        }

                        .text-slate-600 {
                                color: var(--color-slate-600) /* oklch(44.6% 0.043 257.281) = #45556c */;
                        }

                /p :

                        .text-slate-600 {
                                color: var(--color-slate-600) /* oklch(44.6% 0.043 257.281) = #45556c */;
                                }
