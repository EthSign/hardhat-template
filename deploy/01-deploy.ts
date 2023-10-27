import {DeployFunction} from 'hardhat-deploy/types'
import {HardhatRuntimeEnvironment} from 'hardhat/types'

const deployExample: DeployFunction = async (
    hre: HardhatRuntimeEnvironment
) => {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const {deploy} = hre.deployments
    const {deployer} = await hre.getNamedAccounts()

    await deploy('SimpleStorage', {
        from: deployer,
        log: true,
        args: [],
        waitConfirmations: 1
    })
}

export default deployExample
deployExample.tags = ['example']
