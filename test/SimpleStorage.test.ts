import {ethers} from 'hardhat'
import '@nomicfoundation/hardhat-chai-matchers'
import {HardhatEthersSigner} from '@nomicfoundation/hardhat-ethers/signers'
import chai, {expect} from 'chai'
import chaiAsPromised from 'chai-as-promised'
import {SimpleStorage} from '../typechain-types'

chai.use(chaiAsPromised)

describe('SimpleStorage Test', () => {
    let admin: HardhatEthersSigner,
        user: HardhatEthersSigner,
        contract: SimpleStorage

    const data = 'test'

    before(async () => {
        ;[admin, user] = await ethers.getSigners()
    })

    beforeEach(async () => {
        const SimpleStorageFactory =
            await ethers.getContractFactory('SimpleStorage')
        contract = await SimpleStorageFactory.deploy()
    })

    it('should save and retrieve data correctly', async () => {
        await contract.connect(admin).setData(data)
        await expect(contract.data()).to.eventually.equal(data)
        await contract.connect(user).setData(data + data)
        await expect(contract.data()).to.eventually.equal(data + data)
    })
})
