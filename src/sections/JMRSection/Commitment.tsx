import { JMRCommitment } from "@/constants/contents"

const Commitment = () => {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="max-w-[70.5rem] w-full px-4">
        <div className="text-center mb-8">
          <h3 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8">
            Our Commitment
          </h3>
        </div>
        <div className="space-y-6">
          <p className="text-left text-sm md:text-base lg:text-lg leading-relaxed">
            {JMRCommitment.paragraph1}
          </p>
          <p className="text-left text-sm md:text-base lg:text-lg leading-relaxed">
            {JMRCommitment.paragraph2}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Commitment