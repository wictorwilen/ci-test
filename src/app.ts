class CiTest {
    public run(): string {
        return 'Hello CI';
    }
}
const ciTest = new CiTest();
console.log(ciTest.run());