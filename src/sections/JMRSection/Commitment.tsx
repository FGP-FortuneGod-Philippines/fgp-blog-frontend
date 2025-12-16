import { JMRCommitment } from "@/constants/contents"

const Commitment = () => {
  return (
    <div className="flex items-center justify-center py-12 sm:py-15">
      <div className="max-w-6xl w-full px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="text-center mb-8 sm:mb-12">
          <h3>
            Our Commitment
          </h3>
        </div>
        <div className="space-y-6">
          <p className="text-left leading-relaxed text-sm sm:text-base">
            {JMRCommitment.paragraph1}
          </p>
          <p className="text-left leading-relaxed text-sm sm:text-base">
            {JMRCommitment.paragraph2}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Commitment