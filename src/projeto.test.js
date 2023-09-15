const { Projeto } = require('./projeto')
const { Engenheiro } = require('./engenheiro');
const { Arquiteto } = require('./arquiteto')

let arquiteto = new Arquiteto(1, 'Carol', 123456, 9999999, '@gmail', 202320);
let engenheiro = new Engenheiro(1, 'Carol', 123456, 9999999, '@gmail', 202320);


describe("Verificar Engenheiro(a)", () => {
    it("Retornar inválido caso não seja passado o(a) responsável técnico(a)", () => {
        expect(() => new Projeto(1, null, 'ipiranga', 'nao aplicavel')).toThrow("Informe um responsável técnico válido!");
    });

    it("Retornar válido quando todos atribudos obrigatório do construtor são passados", () => {
        let project = new Projeto(1, engenheiro, arquiteto, 'ipiranga', 'nao aplicavel');
        expect(() => project).not.toThrow()
    })
})

describe("Teste do Setter de endereço", () => {
    it("Deve definir um novo endereço corretamente", () => {
        const projeto = new Projeto(1, engenheiro, arquiteto, "Endereço Antigo", "Empreiteiro Antigo");
        const novoEndereco = "Novo Endereço";
        projeto.address = novoEndereco;
        expect(projeto.address).toBe(novoEndereco);
    })
})

describe("Teste do Setter de empreiteiro ", () => {
    it(" Deve definir um novo empreiteiro corretamente ", () => {
        const projeto = new Projeto(1, engenheiro, arquiteto, "Endereço Antigo", "Empreiteiro Antigo");
        const novoEmpreiteiro = "Novo empreiteiro";
        projeto.serviceProvider = novoEmpreiteiro; 
        expect(projeto.serviceProvider).toBe(novoEmpreiteiro)
    })
})

describe("Teste do Setter de Status ", () => {
    it(" Deve definir um novo status da obra corretamente ", () => {
        const projeto = new Projeto(1, engenheiro,arquiteto, "Endereço Antigo", "Empreiteiro Antigo", "Início");
        const novoStatus = "em andamento";
        projeto.status = novoStatus; 
        expect(projeto.status).toBe(novoStatus)
    })
})

describe('Teste do Setter de manutencao', () => {
    it('Deve adicionar uma nova manutenção à lista de manutenções', () => {
        
        const project = new Projeto(1, engenheiro,arquiteto, 'Endereço Antigo', 'Empreiteiro Antigo');
        const maintenanceDate = '2023-09-13';
        const maintenanceService = 'Reparo na estrutura';

        project.addMaintenance(maintenanceDate, maintenanceService);

        const maintenanceList = project.listMaintenance;

        expect(maintenanceList).toHaveLength(1);
        expect(maintenanceList[0]).toEqual({ date: maintenanceDate, service: maintenanceService });
    });
});